import { getDictionaryType, loginResponseType, userInfoResponseType } from '../types/apiTypes';
import { instance } from './index'
import { loginDataType, registrationDataType } from '../types/index'
export const a = 1

class DictionaryAPI {

    static fetchUserInfo = () => {
        return instance.get<getDictionaryType>('/dictionary', {withCredentials: true})
    }
}

export default DictionaryAPI