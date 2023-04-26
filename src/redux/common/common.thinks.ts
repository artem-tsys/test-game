import { createAsyncThunk } from "@reduxjs/toolkit";
import getAxiosInstance from "src/api/axios-instanse";

export const fetchConfig = createAsyncThunk('common/fetchConfig', async () => {
	const questions = await getAxiosInstance().get('/config').catch((err) => {
		if (err.response.data) {
			throw new Error(err.response.data.message)
		}
		throw new Error(err.message)
	})
	return questions.data ?? questions;
})

export default fetchConfig;
