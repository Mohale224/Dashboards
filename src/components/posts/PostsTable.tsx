import {Table, TableBody, TableCell, TableHeader, TableHead, TableRow, TableCaption} from '@/components/ui/table';
import Link from 'next/link';
import posts from '../data/posts';
import {Post} from '../types/posts';

interface PostsTableProps {
    limit?: number;
    title?: string;
}
const PostTable = ({ limit, title }: PostsTableProps) => {

    //Sort posts in dec order based on date
    // const sortedPosts = posts.sort((a, b) => new Date(b.date).getTime()- new Date(a.date).getTime());
    
    //Filter posts to limit
    // const filteredPosts = limit ? sortedPosts.slice(0, limit) : sortedPosts;
    return (
        <div className='mt-10'>
            <h3 className='text-lg font-semibold mb-4'>{title ? title : 'Latest Items'}</h3>
            <Table>
                <TableCaption>A list of recent Items 
                </TableCaption>
                <TableHeader>
                    <TableRow>
                        <TableHead>Items</TableHead>
                        <TableHead className='hidden md:table-cell'>Bitcoin(BTC)</TableHead> 
                        <TableHead className='hidden md:table-cell text-right'> Ethereum(ETH)</TableHead> 
                        <TableHead>View</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {/* It should be sortedPosts instead of posts */}
                    {/* it should be filteredPosts instead of sortedPosts  */}
                    {posts.map((post) => (
                        <TableRow key={post.id}>
                            <TableCell>{post.title}   
                            </TableCell>
                            <TableCell className='hidden md:table-cell' >{post.author}   
                            </TableCell>
                            <TableCell className='text-right hidden md:table-cell ' >{post.date}   
                            </TableCell>
                            
                            <TableCell>
                                <Link href={`/posts/edit/${post.id}`}>
                                <button className='bg-blue-500 hover:blue-700
                                text-white font-bold py-2 px-4 rounded text-xs'> Edit</button>
                                </Link>
                                
                            </TableCell>
                            
                        </TableRow>
                    ))}
                    </TableBody>
            </Table>
        </div>
    );
};


export default PostTable;
