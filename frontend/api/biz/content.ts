import { useQuery } from '@tanstack/react-query';

import { mockFetchContentList } from '@/mock/content';

export const queryKey = ['api-biz-moment'];

export const useBizContentQuery = () => {
  return useQuery({
    queryKey,
    queryFn: async () => {
      return mockFetchContentList();
    },
    enabled: true,
    staleTime: 0, // 禁用缓存，使每次都获取最新数据
    gcTime: 0
  });
};
