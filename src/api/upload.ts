import { createAxios } from "@/utils/axios";

export const singleUpload = (formData: FormData) => {
  return createAxios({
    url: '/upload_single',
    method: 'POST',
    headers: {
      'Content-Type': 'multipart/form-data'
    },
    data: formData
  })
}