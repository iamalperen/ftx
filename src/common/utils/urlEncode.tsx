const urlEncode = (url: string): string => {
  let newUrl: string = encodeURI(url);
  newUrl = newUrl.replace(/#/g, '%23');
  return newUrl;
};

export default urlEncode;
