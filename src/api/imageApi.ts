import { IPromptStore } from "models"
import axiosClient from "./axiosClient"

export const imageApi = {
    getImages(params: IPromptStore) {
        return axiosClient.get<string[]>('/api/data', { params })
    }
    
}