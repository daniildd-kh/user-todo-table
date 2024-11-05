import React from 'react';
import styles from './styles.module.css';
import TableItem from '../TableItem/TableItem';
import { useTableData } from './hooks/useTableData';

const Table = () => {
  const { users, loading, error, userTaskCount } = useTableData();

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error.message}</p>;

  return (
    <table className={styles.table}>
      <thead>
        <tr>
          <th>#</th>
          <th className={styles.flexGrow}>Username</th>
          <th>to-do count</th>
        </tr>
      </thead>
      <tbody>
        {users &&
          users.map((user) => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td className={styles.flexGrow}>
                <TableItem title={user.username} text={user.email} />
              </td>
              <td>{userTaskCount[user.id] || 0}</td>
            </tr>
          ))}
      </tbody>
    </table>
  );
};

export default Table;
