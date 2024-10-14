import { useQuery } from 'react-query';
import { KidData } from '../types/datas';

export interface UserData {
  id: number,
  name: string,
  kids: KidData[],
}

const fetchUserData = () => {
  // imitating request
  return new Promise<UserData>((resolve) => {
    setTimeout(() => {
      resolve({
        id: 1,
        name: 'Robert Bowen',
        kids: [
          {
            id: 1,
            name: 'Christian Bowen',
            age: '1y 2m',
            gender: 'male',
            healthData: {
              weight: {
                value: '15 lbs \n3 oz',
                timestamp: '1:00 PM Dec 05 2023',
              },
              diaper: {
                value: 'Pee Medium',
                timestamp: '3h 35m ago',
              },
              feeding: {
                value: 'Formula 5oz',
                timestamp: '3h 35m ago',
              },
              sleep: {
                value: '2h 20m',
                timestamp: '3h 35m ago',
              },
            },
          },
          {
            id: 2,
            name: 'Robert Bowen',
            age: '2y 4m',
            gender: 'male',
            healthData: {
              weight: {
                value: '12 lbs \n3 oz',
                timestamp: '1:00 PM Dec 05 2023',
              },
              diaper: {
                value: 'Pee Medium',
                timestamp: '3h 35m ago',
              },
              feeding: {
                value: 'Formula 4oz',
                timestamp: '3h 35m ago',
              },
              sleep: {
                value: '5h 20m',
                timestamp: '3h 35m ago',
              },
            },
          },
        ],
      });
    }, 1000);
  });
};

export const useUserData = () => {
  const { data: userData } = useQuery(['userData'], fetchUserData, {
    suspense: true,
  });
  return userData;
};
