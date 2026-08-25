import argparse
import sys

from garminconnect import (
    Garmin,
    GarminConnectAuthenticationError,
    GarminConnectConnectionError,
    GarminConnectTooManyRequestsError,
)

if __name__ == "__main__":
    parser = argparse.ArgumentParser()
    parser.add_argument("email", nargs="?", help="email of garmin")
    parser.add_argument("password", nargs="?", help="password of garmin")
    parser.add_argument(
        "--is-cn",
        dest="is_cn",
        action="store_true",
        help="if garmin account is cn",
    )
    options = parser.parse_args()
    if not options.email or not options.password:
        print("Missing email/password")
        sys.exit(1)

    api = Garmin(
        email=options.email,
        password=options.password,
        is_cn=options.is_cn,
        prompt_mfa=lambda: input("MFA code: ").strip(),
    )
    try:
        api.login()
    except GarminConnectTooManyRequestsError as e:
        print(f"Garmin rate limit hit: {e}")
        print("Wait 30-60 minutes and retry, ideally from a different IP/network.")
        sys.exit(1)
    except GarminConnectAuthenticationError as e:
        print(f"Authentication failed: {e}")
        sys.exit(1)
    except GarminConnectConnectionError as e:
        print(f"Connection error: {e}")
        sys.exit(1)

    print(api.client.dumps())
