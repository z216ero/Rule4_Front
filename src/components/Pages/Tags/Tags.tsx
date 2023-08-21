import React, { useState } from 'react'
import { useAddTagMutation, useGetTagsQuery } from '../../../services/tagService'
import DataWrapper from '../../DataWrapper';
import { ITag, TagType } from '../../../models/Post';
import { Input, Button, Select, Space } from 'antd';
import TagList from '../Post/components/TagList';

const { Option } = Select;

export default function Tags() {
  const [addTag, result] = useAddTagMutation();
  const { isError, isLoading, data } = useGetTagsQuery("");
  const [addingTag, setAddingTag] = useState<ITag>({ code: "", name: "", type: TagType.General });

  const setName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAddingTag({ ...addingTag, name: e.target.value })
  }

  const setCode = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAddingTag({ ...addingTag, code: e.target.value })
  }

  const setType = (e: string) => {
    const enumValue: TagType = Number(e);
    setAddingTag({ ...addingTag, type: enumValue })
  }

  const addTagHandler = async () => {
    try {
      await addTag(addingTag).unwrap();
      resetTag();
    } catch (error) {
    }

  }

  const resetTag = () => {
    setAddingTag({ code: "", name: "", type: TagType.Copyright })
  }

  const isDisabled = (): boolean => {
    return addingTag.code === "" || addingTag.name === "";
  }

  if (result.error) {
    <div>Ok</div>
  }

  return <DataWrapper isError={isError}
    data={data}
    isLoading={isLoading}>
    <div className='flex w-full justify-center gap-2 my-2'>
      <div className='border border-gray-300 rounded-md w-[50%] p-3'>
        <TagList tags={data} />
      </div>
    </div>
    <div className='flex w-full justify-center items-center flex-col gap-3'>
      <div className='w-[50%] flex gap-3 justify-between'>
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
        <div className='flex items-center gap-3'>
          <div>Type:</div>
          <Select value={TagType[addingTag.type]} style={{ width: 300 }} onChange={setType}>
            {Object.values(TagType)
              .filter(key => isNaN(Number(key)))
              .map((tagValue, index) => (
                <Option key={index} value={index}>
                  {tagValue}
                </Option>
              ))}
          </Select>
        </div>
        <Button
          disabled={isDisabled()}
          onClick={addTagHandler}>Add</Button>
      </div>
    </div>

  </DataWrapper >
}