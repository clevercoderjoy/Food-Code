import useOnlineStatus from "../../utils/useOnlineStatus";

const DataConnectivityStatus = () => {
  const onlineStatus = useOnlineStatus();

  return (
    <>
      {
        onlineStatus ? null : (
          <>
            <h1 style={{ textAlign: "center", margin: "1rem", padding: "1rem" }}>
              Looks like you are offline!!!
            </h1>
            <h2 style={{ textAlign: "center", margin: "1rem", padding: "1rem" }}>
              Please check your internet connection.
            </h2>
          </>
        )
      }
    </>
  )
}

export default DataConnectivityStatus;
