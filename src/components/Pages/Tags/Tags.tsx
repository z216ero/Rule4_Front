import React, { useState } from 'react'
import { useGetTagsQuery } from '../../../services/tagService'
import DataWrapper from '../../DataWrapper';
import { ITag, TagType } from '../../../models/Post';
import { Input, Space } from 'antd';

const { Search } = Input;

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
    <Input allowClear  onChange={setName} value={addingTag.name}></Input>
    <Input allowClear onChange={setCode} value={addingTag.code}></Input>
  </DataWrapper>
}
