
interface LanguageConstants {
  SITE_TITLE: string;
  SITE_DESCRIPTION: string;
  TAGS_TITLE: string;
  TAGS_DESCRIPTION: string;
  SEARCH_PAGE_TITLE: string;
  SEARCH_PAGE_DESCRIPTION: string;
  GO_TO_HOMEPAGE: string;
  ERROR_404_SUBMESSAGE: string;
  ERROR_404_MESSAGE: string;
  ERROR_404_DESCRIPTION: string;
  ERROR_404_TITLE: string;
  ABOUT_Three_IMAGE_ALT: string;
  ABOUT_Three_CONTENT: string;
  ABOUT_Three_TITLE: string;
  ABOUT_Two_IMAGE_ALT: string;
  ABOUT_Two_CONTENT: string;
  ABOUT_Two_TITLE: string;
  ABOUT_One_IMAGE_ALT: string;
  ABOUT_One_CONTENT: string;
  ABOUT_One_TITLE: string;
  ABOUT_DESCRIPTION: string;
  ABOUT_TITLE: string;
  UPDATED_ON: string;
  PUBLISHED_ON: string;
  TAGS_HEADING: string;
}

const zhConstants: LanguageConstants = {
  SITE_TITLE: "星界",
  SITE_DESCRIPTION: "星界 - 增强版astro主题，适用于视觉博客，多语言支持助力全球受众。",
  TAGS_TITLE: "星界 - 所有标签",
  TAGS_DESCRIPTION: "星界 - 增强版astro主题，适用于视觉博客，多语言支持助力全球受众。",
  SEARCH_PAGE_TITLE: "星界 - 站内搜索",
  SEARCH_PAGE_DESCRIPTION: "搜索星界全站内容",
  GO_TO_HOMEPAGE: "返回首页",
  ERROR_404_SUBMESSAGE: "您查找的页面不存在或已被移动。",
  ERROR_404_MESSAGE: "页面未找到",
  ERROR_404_DESCRIPTION: "404 - 页面未找到",
  ERROR_404_TITLE: "404 - 页面未找到",
  ABOUT_Three_IMAGE_ALT: "关于某甲",
  ABOUT_Three_CONTENT: "增强版astro主题，适用于视觉博客，多语言支持助力全球受众。",
  ABOUT_Three_TITLE: "某甲",
  ABOUT_Two_IMAGE_ALT: "关于某乙",
  ABOUT_Two_CONTENT: "增强版astro主题，适用于视觉博客，多语言支持助力全球受众。",
  ABOUT_Two_TITLE: "某乙",
  ABOUT_One_IMAGE_ALT: "关于某丙",
  ABOUT_One_CONTENT: "增强版astro主题，适用于视觉博客，多语言支持助力全球受众。",
  ABOUT_One_TITLE: "某丙",
  ABOUT_DESCRIPTION: "关于星界- 增强版astro主题，适用于视觉博客，多语言支持助力全球受众。",
  ABOUT_TITLE: "关于星界",
  UPDATED_ON: "更新于",
  PUBLISHED_ON: "发布于",
  TAGS_HEADING: "标签",
};

const enConstants: LanguageConstants = {
  SITE_TITLE: "astroVerse",
  SITE_DESCRIPTION: "astroVerse - Enhanced astro theme for impactful visual blogging, now with multilingual support for a global audience.",
  TAGS_TITLE: "astroVerse - All Tags",
  TAGS_DESCRIPTION: "astroVerse - Enhanced astro theme for impactful visual blogging, now with multilingual support for a global audience.",
  SEARCH_PAGE_TITLE: "astroVerse - Site Search",
  SEARCH_PAGE_DESCRIPTION: "Search all content on astroVerse",
  GO_TO_HOMEPAGE: "Go to Homepage",
  ERROR_404_SUBMESSAGE: "The page you're looking for doesn't exist or has been moved.",
  ERROR_404_MESSAGE: "Page not found",
  ERROR_404_DESCRIPTION: "404 - Page not found",
  ERROR_404_TITLE: "404 - Page Not Found",
  ABOUT_Three_IMAGE_ALT: "About Three",
  ABOUT_Three_CONTENT: "Enhanced astro theme for impactful visual blogging, now with multilingual support for a global audience.",
  ABOUT_Three_TITLE: "Three",
  ABOUT_Two_IMAGE_ALT: "About Two",
  ABOUT_Two_CONTENT: "Enhanced astro theme for impactful visual blogging, now with multilingual support for a global audience.",
  ABOUT_Two_TITLE: "Two",
  ABOUT_One_IMAGE_ALT: "About One",
  ABOUT_One_CONTENT: "Enhanced astro theme for impactful visual blogging, now with multilingual support for a global audience.",
  ABOUT_One_TITLE: "One",
  ABOUT_DESCRIPTION: "About astroVerse - Enhanced astro theme for impactful visual blogging, now with multilingual support for a global audience.",
  ABOUT_TITLE: "About astroVerse",
  UPDATED_ON: "Updated on",
  PUBLISHED_ON: "Published on",
  TAGS_HEADING: "Tags",
};

export function getConstants(lang: 'zh' | 'en'): LanguageConstants {
  return lang === 'zh' ? zhConstants : enConstants;
}

export function getTagMetadata(tag: string, lang: 'zh' | 'en') {
  if (lang === 'zh') {
    return {
      title: `星界中'${tag}'主题的所有文章`,
      description: `浏览星界关于${tag}的文章。`,
    };
  } else {
    return {
      title: `All articles on '${tag}' in astroVerse`,
      description: `Browse articles about ${tag} on astroVerse.`,
    };
  }
}

export function getCategoryMetadata(category: string, lang: 'zh' | 'en') {
  if (lang === 'zh') {
    return {
      title: `星界'${category}'相关的文章`,
      description: `在星界中浏览有关${category}主题的所有文章`,
    };
  } else {
    return {
      title: `Articles related to '${category}' on astroVerse`,
      description: `Browse all articles on ${category} in astroVerse`,
    };
  }
}