import NavBar from "./components/NavBar";
import Header from "./components/Header";
import SearchBar from "./components/SearchBar";
import JobCard from "./components/JobCard";
import LoginPage from "./components/Login";
import { useEffect, useState } from "react";
import {
  collection,
  query,
  orderBy,
  where,
  getDocs,
  or,
} from "firebase/firestore";
import { db } from "./firebase.config";
function App() {
  const [jobs, setJobs] = useState([]);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const fetchJobs = async () => {
    //setCustomSearch(false);
    const tempJobs = [];
    const jobsRef = query(collection(db, "JobBoardOnline"));
    const q = query(jobsRef, orderBy("company", "asc"));
    const req = await getDocs(q);

    req.forEach((job) => {
      tempJobs.push({
        ...job.data(),
        id: job.id,
      });
    });
    setJobs(tempJobs);
    console.log(tempJobs);
  };

  const fetchJobsCustom = async (jobCriteria) => {
    //setCustomSearch(true);
    const tempJobs = [];
    console.log(jobCriteria);
    const jobsRef = query(collection(db, "JobBoardOnline"));
    const q = query(
      jobsRef,
      or(
        where("type", "in", [jobCriteria.type]),
        where("title", "in", [jobCriteria.title]),
        where("exp", "in", [jobCriteria.exp]),
        where("location", "in", [jobCriteria.location])
      ),
      orderBy("company", "desc")
    );
    console.log(jobCriteria.type);
    const req = await getDocs(q);
    req.forEach((job) => {
      // console.log(doc.id, " => ", doc.data());
      tempJobs.push({
        ...job.data(),
        id: job.id,
      });
    });
    setJobs(tempJobs);
    console.log(tempJobs);
  };

  useEffect(() => {
    fetchJobs();
  }, []);

  const handleLogin = () => {
    setIsAuthenticated(true);
  };

  if (!isAuthenticated) {
    return <LoginPage onLogin={handleLogin} />;
  }

  return (
    <div>
      <NavBar />
      <Header />
      <SearchBar fetchJobsCustom={fetchJobsCustom} />
      {jobs.map((job) => (
        <JobCard key={job.id} {...job} />
      ))}
    </div>
  );
}

export default App;
