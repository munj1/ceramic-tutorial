import { useViewerRecord } from "@self.id/react";

const RecordSetter = () => {
  const record = useViewerRecord("basicProfile");

  const updateRecordName = async (name) => {
    await record.merge({
      name: name,
    });
  };

  return <div>Enter</div>;
};

export default RecordSetter;
