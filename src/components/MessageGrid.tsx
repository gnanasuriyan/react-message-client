import {DataTable} from '@gilbarbara/components';

export default function MessageGrid({messages}: any) {
  console.log('messages', messages);
  return (
    <DataTable
      disableScroll={true}
      columns={[
        { key: "content", title: "Message", size: 500, disableSort: true },
        { key: "posted_by", title: "Posted By", size: 200, disableSort: true  },
        { key: "created_at", title: "Posted Date", size: 200, disableSort: true  },
      ]}
      data={messages}
      padding={'md'}
      responsive
      clean={true}
    />
  );
}
