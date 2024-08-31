import React from 'react';
import './Blog.css';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import { FaCalendarAlt, FaUser, FaTag } from 'react-icons/fa'; // Import FontAwesome Icons

const Blog = () => {
    const blogPosts = [
        {
            id: 1,
            image: '/images/blog1.jpg.webp', // Placeholder image URL
            title: 'Finding Balance Through Yoga',
            description: 'Discover how yoga can help you find inner balance in your life and improve your well-being.',
            date: 'August 20, 2024',
            author: 'Jane Doe',
        },
        {
            id: 2,
            image: '/images/blog2.jpg.webp', // Placeholder image URL
            title: 'The Art of Meditation in Yoga',
            description: 'Learn about the art of meditation and how it integrates with yoga practices for a holistic experience.',
            date: 'August 15, 2024',
            author: 'Sophia Miller',
        },
        {
            id: 3,
            image: '/images/blog3.jpg', // Placeholder image URL
            title: 'Breathing Techniques for Stress',
            description: 'Explore various breathing techniques in yoga that can help alleviate stress and promote relaxation.',
            date: 'August 10, 2024',
            author: 'Emily Johnson',
        },
        {
            id: 4,
            image: '/images/blog4.jpg.webp', // Placeholder image URL
            title: 'Essential Yoga Poses for Beginners',
            description: 'A guide to the essential yoga poses every beginner should learn.',
            date: 'August 5, 2024',
            author: 'Sarah Brown',
        },
        {
            id: 5,
            image: '/images/blog5.jpg.webp', // Placeholder image URL
            title: 'Mindfulness in Yoga Practice',
            description: 'Discover the role of mindfulness in enhancing your yoga practice.',
            date: 'July 30, 2024',
            author: 'Anjlie Johnson',
        },
        {
            id: 6,
            image: '/images/blog6.jpg.webp', // Placeholder image URL
            title: 'Nutrition Tips for Yoga',
            description: 'Learn about the best nutrition practices to complement your yoga routine.',
            date: 'July 25, 2024',
            author: 'Emma Wilson',
        },
        {
            id: 7,
            image: '/images/blog7.jpg', // Placeholder image URL
            title: 'The Benefits of Restorative Yoga',
            description: 'Explore how restorative yoga can aid in relaxation and healing.',
            date: 'July 20, 2024',
            author: 'Ava Martinez',
        },
        {
            id: 8,
            image: '/images/blog8.jpg', // Placeholder image URL
            title: 'Preventing Injuries in Yoga',
            description: 'Tips and techniques to avoid injuries while practicing yoga.',
            date: 'July 15, 2024',
            author: 'Anderson Garcia',
        },
        {
            id: 9,
            image: '/images/blog9.jpg', // Placeholder image URL
            title: 'Exploring Advanced Yoga Poses',
            description: 'A look into some advanced yoga poses and their benefits.',
            date: 'July 10, 2024',
            author: 'Charlotte Anderson',
        },
    ];
    
    

    return (
        <div className="container my-5 blog-main">
            <div className="row">
                {blogPosts.map((post) => (
                    <div className="col-md-4 mb-4" key={post.id}>
                        <div className="card blog-card">
                            <img src={post.image} alt={post.title} className="card-img-top blog-image" />
                            <div className="card-body">
                                <h5 className="card-title blog-title">{post.title}</h5>
                                <p className="card-text blog-description">{post.description}</p>
                                <div className="blog-meta">
                                    <span className="blog-date"><FaCalendarAlt /> {post.date}</span>
                                    <span className="blog-author"><FaUser /> {post.author}</span>
                                    <span className="blog-tags"><FaTag /> Yoga, Meditation</span>
                                </div>
                                <a href="#!" className="btn btn-primary blog-btn">Read More</a>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Blog;
