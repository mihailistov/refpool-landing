import { GetServerSideProps } from "next";
import { getServerSession } from "next-auth/next";
import { authOptions } from "@/pages/api/auth/[...nextauth]";

export default function AppIndex() {
  return null;
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const session = await getServerSession(context.req, context.res, authOptions);

  if (session) {
    // User is authenticated, redirect to dashboard
    return {
      redirect: {
        destination: "/app/dashboard",
        permanent: false,
      },
    };
  } else {
    // User is not authenticated, redirect to login
    return {
      redirect: {
        destination: "/auth/login",
        permanent: false,
      },
    };
  }
};

