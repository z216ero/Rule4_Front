import React, { useState } from 'react'
import { useGetTagsQuery } from '../../../services/tagService'
import DataWrapper from '../../DataWrapper';
import { ITag, TagType } from '../../../models/Post';
import { Input, Button } from 'antd';

export default function Tags() {
  const { isError, isLoading, data } = useGetTagsQuery("");
  const [addingTag, setAddingTag] = useState<ITag>({ code: "123", name: "123", type: TagType.Artist });

  const setName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAddingTag({ ...addingTag, name: e.target.value })
  }

  const setCode = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAddingTag({ ...addingTag, code: e.target.value })
  }

  return <DataWrapper isError={isError}
    data={data}
    isLoading={isLoading}>
    <div className='flex w-full justify-center gap-2'>
      {data?.map(t =>
        <div key={t.code}>{t.name}</div>
      )}
    </div>
    <div className='flex w-full justify-center items-center flex-col gap-3'>
      <div className='flex items-center gap-3'>
        <div>Name:</div>
        <div className='w-[300px]'>
          <Input allowClear onChange={setName} value={addingTag.name}></Input>
        </div>
      </div>
      <div className='flex items-center gap-3'>
        <div>Code:</div>
        <div className='w-[300px]'>
          <Input allowClear onChange={setCode} value={addingTag.code}></Input>
        </div>
      </div>
      <button className='border border-gray-300 px-5 py-1 rounded-2xl hover:bg-slate-800'>Add</button>
    </div>
    
  </DataWrapper >
}