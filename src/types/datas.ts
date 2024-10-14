export type KidData = {
  id: number,
  name: string,
  age: string,
  gender: string,
  healthData: {
    weight: {
      value: string,
      timestamp: string,
    },
    diaper: {
      value: string,
      timestamp: string,
    },
    feeding: {
      value: string,
      timestamp: string,
    },
    sleep: {
      value: string,
      timestamp: string,
    },
  },
}

export interface UserData {
  id: number,
  name: string,
  kids: KidData[],
}


