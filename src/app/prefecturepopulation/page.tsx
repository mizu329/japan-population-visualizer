type Prefecture = {
    prefCode: number;
    prefName: string;
}
type Data = {
    message: null;
    result: Prefecture[];
}
import styles from './page.module.css';
// import MyChart from '@/components/Chart';

export default async function page(){
    const endpoint = 'https://yumemi-frontend-engineer-codecheck-api.vercel.app/api/v1/prefectures';

    const res = await fetch(endpoint, {
        method: "GET",
        headers: {
            'Content-Type': 'application/json',
            "X-API-KEY": "8FzX5qLmN3wRtKjH7vCyP9bGdEaU4sYpT6cMfZnJ",
        },
    });

    const data = await res.json() as Data;
    const { result: prefectures } = data;

    return (
        <div>
        <div>
            <h2>都道府県</h2>
        </div>
        <div>
        <ul className={styles.prefecturesUl}>
                    {prefectures.map(({ prefCode, prefName }) => (
                        <li className={styles.prefecturesLi} key={prefCode}>
                            <label className={styles.prefecturesLabel}>
                                <input
                                    type="checkbox"
                                    value={prefName}
                                />
                                {prefName}
                            </label>
                        </li>
                    ))}
                </ul>
        </div>
        <div>
            <h2 className={styles.graphTitle}>総人口推移グラフ</h2>
            <ul className={styles.graphTypeUl}>
                <li className={styles.graphTypeLi}>年少人口</li>
                <li className={styles.graphTypeLi}>生産年齢人口</li>
                <li className={styles.graphTypeLi}>老年人口</li>
            </ul>
        </div>
        <div>
        {/* <MyChart /> */}
        </div>
        <div>
            <button type="submit">利用開始</button>
        </div>
        </div>
    );
}