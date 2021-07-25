import { useSession } from "next-auth/client";
import { useRouter } from "next/dist/client/router";
import Login from "../../components/Login";
import { useDocumentOnce } from "react-firebase-hooks/firestore";
import { db } from "../../firebase";
import Icon from "@material-tailwind/react/Icon";

function Doc() {
  const [session] = useSession();
  if (!session) return <Login />;

  const router = useRouter();
  const { id } = router.query;

  const [snapshot, loadingSnapshot] = useDocumentOnce(
    db.collection("userDocs").doc(session.user.email).collection("doc").doc(id)
  );

  return (
    <div>
      <header className="flex justify-between items-center p-3 pb-1">
        <span onClick={() => router.push("/")} className="cursor-pointer">
          <Icon name="description" size="5xl" color="blue" />
        </span>

        <div className="flex-grow px-2">
          <h2>{snapshot?.data()?.fileName}</h2>
        </div>
      </header>
    </div>
  );
}

export default Doc;
