const initialState = {
    token: '',
    name: 'Nome',
    age: 'Idade'
};

export default (state = initialState, action) => {
    switch(action.type) {
        case 'SET_TOKEN':
            return {...state, token: action.payload.token};
        break;
        case 'SET_NAME':
            return {...state, name: action.payload.name};
        break;
        case 'SET_AGE':
            return {...state, age: action.payload.age};
        break;
    }

    return state; 
}