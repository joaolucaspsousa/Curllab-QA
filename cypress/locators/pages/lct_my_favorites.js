let Locators_MyFavorites = {
  // My Favorites Page
  favoritesTitle: ".profile__right__side > h3",
  favoritesList: ".scroller",
  favoritesListItem: (id) => `.scroller > :nth-child(${id}) > a`,
  removeListItem: (id) =>
    `.scroller > :nth-child(${id}) > .profile__right__side__item__remove`,

  // Logout Button
  logoutButton: ".button-area > .default-button",
};

export default { Locators_MyFavorites };
