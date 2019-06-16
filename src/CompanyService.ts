export const lookupCompanies = (searchText: string) => {
  return fetch(
    `https://autocomplete.clearbit.com/v1/companies/suggest?query=${searchText}`
  ).then(response => response.json());
};
