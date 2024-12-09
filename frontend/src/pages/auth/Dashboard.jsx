import Layout from "@/layouts/Layout";
import BookCard from "@/components/molecules/bookCard/BookCard";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllBooks } from "@/redux/Slices/BookSlice";
function Dashboard(){

    const dispatch = useDispatch();
    const {bookList} = useSelector((state)=> state.book);
    console.log(bookList);
    useEffect(()=>{
        if(bookList?.length === 0){
            dispatch(getAllBooks());
        }
    },[]);


    return(
        <>
        <Layout>
            <div className="w-screen h-full">
              {
                bookList?.length > 0 ? 
                bookList.map((book, index) => {
                  return <BookCard key={index} title={book.title} author={book.author?.name} description={book.description} />;
                }) : <h1>no book found</h1>
              }
            </div>
        </Layout>
        </>
    )
}
export default Dashboard;