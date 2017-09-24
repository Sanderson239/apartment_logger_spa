export const PROFILES_RETRIEVED = 'PROFILES_RETRIEVED'


export function fetchProfiles() {
  return async (dispatch, getState, { Api }) => {
    const json = await Api.fetchProfiles();
    console.log('this', json);
    await dispatch({
      type: PROFILES_RETRIEVED,
    })
  }
}
