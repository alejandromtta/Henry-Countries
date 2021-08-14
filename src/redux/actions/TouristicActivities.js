export const POST_ACTIVITY = 'POST_ACTIVITY'


export const post_activity_action = (data) => {
return{ 
    type: POST_ACTIVITY,
    payload: data
}

}