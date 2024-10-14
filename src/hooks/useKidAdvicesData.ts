import { QueryFunctionContext, useQuery } from 'react-query';
import { KidData } from '../types/datas';

interface KidAdvice {
  title: string
  desc: string
}

const testData = [
  {
    title: 'Milestone',
    desc: 'Month 12',
  },
  {
    title: 'Milestone',
    desc: 'Month 14',
  },
];

export interface UserData {
  id: number,
  name: string,
  kids: KidData[],
}

const fetchKidAdvicesData = ({ queryKey }: QueryFunctionContext<[string, number]>): Promise<KidAdvice> => {
  // imitating request
  const [, kidId] = queryKey;
  return new Promise<KidAdvice>((resolve) => {
    setTimeout(() => {
      resolve(testData[kidId - 1]);
    }, 3000);
  });
};

export const useKidAdvicesData = (id: number) => {
  const { data: userData } = useQuery(['kidAdvices', id], fetchKidAdvicesData, {
    suspense: true,
  });
  return userData;
};
