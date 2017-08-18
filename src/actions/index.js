export const PROFILES_RETRIEVED = 'PROFILES_RETRIEVED'


export function fetchProfiles() {
  return async (dispatch, getState, { Api }) => {
    await dispatch({
      type: PROFILES_RETRIEVED,
    })
  }
}
