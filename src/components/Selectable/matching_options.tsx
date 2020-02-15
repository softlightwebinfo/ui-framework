export const getMatchingOptions = (
  /**
   * All available options to match against
   */
  options,
  /**
   * String to match option.label against
   */
  searchValue,
  /**
   * Async?
   */
  isPreFiltered?,
  /**
   * To exclude selected options from the search list,
   * pass the array of selected options
   */
  selectedOptions?
) => {
  const normalizedSearchValue = searchValue.trim().toLowerCase();
  const matchingOptions = [];

  options.forEach(option => {
    collectMatchingOption(
      matchingOptions,
      option,
      normalizedSearchValue,
      isPreFiltered,
      selectedOptions
    );
  });
  return matchingOptions;
};

const getSelectedOptionForSearchValue = (
  searchValue,
  selectedOptions
) => {
  const normalizedSearchValue = searchValue.toLowerCase();
  return selectedOptions.find(
    option => option.label.toLowerCase() === normalizedSearchValue
  );
};

const collectMatchingOption = (
  accumulator,
  option,
  normalizedSearchValue,
  isPreFiltered,
  selectedOptions
) => {
  // Don't show options that have already been requested if
  // the selectedOptions list exists
  if (selectedOptions) {
    const selectedOption = getSelectedOptionForSearchValue(
      option.label,
      selectedOptions
    );
    if (selectedOption) {
      return false;
    }
  }

  // If the options have already been prefiltered then we can skip filtering against the search value.
  // TODO: I still don't quite understand how this works when hooked up to async
  if (isPreFiltered) {
    accumulator.push(option);
    return;
  }

  if (!normalizedSearchValue) {
    accumulator.push(option);
    return;
  }

  const normalizedOption = option.label.trim().toLowerCase();
  if (normalizedOption.includes(normalizedSearchValue)) {
    accumulator.push(option);
  }
};
