import * as axios from "axios";

const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        "API-KEY": "62d84ce7-d6de-4009-b54c-a7b259b3d5a6"
    }
});

export const UsersAPI = {
    getUsers (currentPage = 1, pageSize = 10) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`, )
            .then(response => response.data);
    },

    getProfile (userId) {
        console.warn('Obsolete method. Please ProfileAPI object')
        return ProfileAPI.getProfile(userId)
    },
    follow (userId) {
        return instance.post(`follow/${userId}` )
    },
    unfollow(userId) {

        return instance.delete(`follow/${userId}`)
    }
}

export const ProfileAPI = {
    getProfile (userId) {
        return instance.get(`profile/` + userId)
    },
    getStatus(userId) {
        return instance.get(`profile/status/` + userId)

    },
    updateStatus(status) {
        return instance.put(`profile/status`, {status: status})
    },
    savePhoto(photoFile) {
        const formData = new FormData();
        formData.append("image", photoFile);

        return instance.put('profile/photo', formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        });
    }


}

export const authAPI = {
    me () {
        return instance.get(`auth/me`)

    },
    login (email, password, rememberMe = false) {
        return instance.post(`auth/login`, { email, password, rememberMe})

    },
    logout () {
        return instance.delete(`auth/login`)

    }

}

