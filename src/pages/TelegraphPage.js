import React, { useEffect, useState } from 'react';
import './TelegraphPage.css'; // Импортируйте файл стилей

const TelegraphPage = ({ path }) => {
    const [pageData, setPageData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchPageData = async () => {
            try {
                const response = await fetch(`https://api.telegra.ph/getPage/${path}?return_content=true`);
                const data = await response.json();
                if (data.ok) {
                    setPageData(data.result);
                } else {
                    setError('Не удалось загрузить данные страницы.');
                }
            } catch (err) {
                setError('Ошибка при загрузке данных.');
            } finally {
                setLoading(false);
            }
        };

        fetchPageData();
    }, [path]);

    if (loading) return <p>Загрузка...</p>;
    if (error) return <p>{error}</p>;

    const renderContent = (content) => {
        return content.map((block, index) => {
            const Tag = block.tag;
            return (
                <Tag key={index} className={`telegraph-${Tag}`}>
                    {block.children.map((child, i) => {
                        if (typeof child === 'string') {
                            return child;
                        }
                        if (child.tag === 'a') {
                            return (
                                <a key={i} {...child.attrs} className="telegraph-link">
                                    {child.children[0]}
                                </a>
                            );
                        }
                        return null;
                    })}
                </Tag>
            );
        });
    };

    return (
        <div className="telegraph-container">
            <h1 className="telegraph-title">{pageData.title}</h1>
            <div className="telegraph-content">{renderContent(pageData.content)}</div>
        </div>
    );
};

export default TelegraphPage;
