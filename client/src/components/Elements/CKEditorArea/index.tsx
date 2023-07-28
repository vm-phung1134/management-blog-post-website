import React from "react";
import { useField } from "formik";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";

type CkEditorFieldProps = {
  label: string;
  name: string;
};

const CkEditorField: React.FC<CkEditorFieldProps> = ({ label, name }) => {
  const [field, meta, helpers] = useField(label);

  const handleChange = (event: any, editor: any) => {
    const data = editor.getData();
    helpers.setValue(data);
  };

  return (
    <div>
      <label className="font-medium leading-10" htmlFor={name}>
        {name}
      </label>
      <CKEditor
        onReady={(editor) => {
          editor.editing.view.change((writer) => {
            const root = editor.editing.view.document.getRoot();
            if (root) {
              writer.setStyle("height", "100px", root);
            }
          });
        }}
        editor={ClassicEditor}
        data={field.value}
        onChange={handleChange}
      />
      {meta.touched && meta.error ? <div>{meta.error}</div> : null}
    </div>
  );
};

export default CkEditorField;
