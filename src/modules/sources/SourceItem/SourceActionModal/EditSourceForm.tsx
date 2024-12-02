import React from 'react';
import {SourceEntity, UpdateSourceInput} from "../../../../graphql/generated";
import {useForm} from "react-hook-form";
import {pick} from "lodash";

interface EditSourceFormProps {
  source: SourceEntity,
  onSubmit: (values: UpdateSourceInput) => void,
}

const EditSourceForm = ({source, onSubmit}: EditSourceFormProps) => {
  const form = useForm<UpdateSourceInput>({
    defaultValues: pick(source, ['name', 'tags']),
  });

  return (
    <form onSubmit={form.handleSubmit(onSubmit)}>
      <input {...form.register('name')} />
      <input {...form.register('tags')} />
    </form>
  );
};

export default EditSourceForm;