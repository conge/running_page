interface ISiteMetadataResult {
  siteTitle: string;
  siteUrl: string;
  description: string;
  logo: string;
  navLinks: {
    name: string;
    url: string;
  }[];
}

const getBasePath = () => {
  const baseUrl = import.meta.env.BASE_URL;
  return baseUrl === '/' ? '' : baseUrl;
};

const data: ISiteMetadataResult = {
  siteTitle: 'Conge 跑步',
  siteUrl: 'https://conge.github.io',
  logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTtc69JxHNcmN1ETpMUX4dozAgAN6iPjWalQ&usqp=CAU',
  description: 'Personal site and blog',
  navLinks: [
    {
      name: 'Summary',
      url: `${getBasePath()}/summary`,
    },
    {
      name: '主页',
      url: 'https://conge.github.io',
    },
    {
      name: '书影音',
      url: 'https://conge.github.io/books/',
    },
    {
      name: '跑步周记',
      url: 'https://conge.github.io/category/#%E6%8A%98%E8%BF%94%E7%82%B9',
    },
    {
      name: '育儿周记',
      url: 'https://conge.github.io/category/#%E7%88%B6%E8%8C%83%E5%AD%A6%E5%A0%82',
    },
    {
      name: '关于',
      url: 'https://conge.github.io/about',
    },
],
};

export default data;
