export const validate = (regex, text) => {
  if (text.length != 0)
    return regex.test(text);
  else
    return false
}