const matchFavBoughtActions = (
  allActions,
  userFavouriteActions,
  userBoughtActions
) => {
  const favouriteActionsIds = userFavouriteActions.map(
    (favouriteAction) => favouriteAction.id_action
  );

  const boughtActionsIds = userBoughtActions.map(
    (boughtAction) => boughtAction.id_action
  );

  // console.log(userBoughtActions);

  const matchedActions = allActions.map((action) => {
    if (favouriteActionsIds.includes(action.id_action))
      action.isFavourite = true;
    else action.isFavourite = false;

    if (boughtActionsIds.includes(action.id_action)) action.isBought = true;
    else action.isBought = false;
    // console.log(action);
    return action;
  });

  return matchedActions;
};

export default matchFavBoughtActions;
