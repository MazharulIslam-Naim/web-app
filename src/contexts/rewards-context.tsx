import { RewardInfo } from "@/models/RewardInfo";
import { createContext, PropsWithChildren, useState } from "react";

export type RewardsContextType = {
  rewards: Array<RewardInfo>;
}

export const RewardsContext = createContext<RewardsContextType>({rewards: []});

export function RewardsContextProvider({children}:PropsWithChildren) {
  const [rewardsArray,setRewardsArray] = useState<Array<RewardInfo>>([]);
  
  return <RewardsContext.Provider value={{rewards: rewardsArray}}>{children}</RewardsContext.Provider>
}