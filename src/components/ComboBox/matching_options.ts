export const flattenOptionGroups = (
  optionsOrGroups: any[]
) => {
  return optionsOrGroups.reduce(
    (
      options: any[],
      optionOrGroup: any
    ) => {
      if (optionOrGroup.options) {
        options.push(...optionOrGroup.options);
      } else {
        options.push(optionOrGroup);
      }
      return options;
    },
    []
  );
};

export const getSelectedOptionForSearchValue = (
  searchValue: string,
  selectedOptions: any[]
) => {
  const normalizedSearchValue = searchValue.toLowerCase();
  return selectedOptions.find(
    option => option.label.toLowerCase() === normalizedSearchValue
  );
};

const collectMatchingOption = (
  accumulator: any[],
  option: any,
  selectedOptions: any[],
  normalizedSearchValue: string,
  isPreFiltered: boolean,
  showPrevSelected: boolean
) => {
  // Only show options which haven't yet been selected unless requested.
  const selectedOption = getSelectedOptionForSearchValue(
    option.label,
    selectedOptions
  );
  if (selectedOption && !showPrevSelected) {
    return false;
  }

  // If the options have already been pre-filtered then we can skip filtering against the search value.
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

export const getMatchingOptions = (
  options: any[],
  selectedOptions: any[],
  searchValue: string,
  isPreFiltered: boolean,
  showPrevSelected: boolean
) => {
  const normalizedSearchValue = searchValue.trim().toLowerCase();
  const matchingOptions: any[] = [];

  options.forEach(option => {
    if (option.options) {
      const matchingOptionsForGroup: any[] = [];
      option.options.forEach((groupOption: any) => {
        collectMatchingOption(
          matchingOptionsForGroup,
          groupOption,
          selectedOptions,
          normalizedSearchValue,
          isPreFiltered,
          showPrevSelected
        );
      });
      if (matchingOptionsForGroup.length > 0) {
        // Add option for group label
        matchingOptions.push({label: option.label, isGroupLabelOption: true});
        // Add matching options for group
        matchingOptions.push(...matchingOptionsForGroup);
      }
    } else {
      collectMatchingOption(
        matchingOptions,
        option,
        selectedOptions,
        normalizedSearchValue,
        isPreFiltered,
        showPrevSelected
      );
    }
  });
  return matchingOptions;
};
