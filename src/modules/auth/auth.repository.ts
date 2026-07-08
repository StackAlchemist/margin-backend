import { prisma } from "../../lib/prisma";

export const findUserByEmail = (email: string) => {
  return prisma.user.findUnique({
    where: { email },
  });
};

export const createUser = (data: {
  username: string;
  email: string;
  password: string;
}) => {
  return prisma.user.create({
    data,
  });
};

export const updateRefreshTokenHash = (
  userId: string,
  refreshTokenHash: string
) => {
  return prisma.user.update({
    where: { id: userId },
    data: {
      refreshTokenHash,
    },
  });
};