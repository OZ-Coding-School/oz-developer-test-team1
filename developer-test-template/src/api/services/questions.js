import { api } from '../instance';

export const getQuestions = async () => {
  const { data } = await api.get('/questions');
  return data;
};
