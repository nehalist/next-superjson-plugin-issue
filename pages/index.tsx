import type {NextPage} from 'next'

const Home: NextPage = () => {
  return (
    <>home</>
  )
}

export default Home;

export const getServerSideProps = async () => {
  return {
    props: {
      date: new Date(),
    },
  }
}
