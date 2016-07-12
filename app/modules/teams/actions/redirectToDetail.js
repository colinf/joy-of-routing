
export default ({state, services}) => {
  const {app: {selectedTeamId}} = state.get();
  services.router.redirect(`/teams/${selectedTeamId}`);
};
