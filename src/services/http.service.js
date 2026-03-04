import axios from "axios"
import { environment } from "@/utils/environments"

export const http = axios.create({
  baseURL: environment.apiUrl,
})
