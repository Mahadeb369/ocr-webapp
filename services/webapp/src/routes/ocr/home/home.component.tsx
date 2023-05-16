import { useState } from 'react';
import graphql from 'babel-plugin-relay/macro';
import { ConnectionHandler } from 'relay-runtime';
import { usePromiseMutation } from '../../../shared/services/graphqlApi/usePromiseMutation';
import { Button } from '../../../shared/components/forms/button';
import { Canvas } from '../canvas';
import { ButtonSection, Container, Main, P } from './home.styles';
import { SamplePicker } from './samplePickerSection';
import { Upload } from './uploadSection';
import { Url } from './urlSection';
import { Header } from './headerSection';

type BrowseHistoryFields = {
  base64Data: string;
};

export const Home = () => {
  const [base64Str, setBase64Str] = useState<''>('');
  const [ocrData, setOcrData] = useState<''>('');

  // const [commitCrossingItemFormMutation] = usePromiseMutation<any>(graphql`
  //   mutation createBrowseHistoryItemMutation($input: CreateCrossingItemMutationInput!, $connections: [ID!]!) {
  //     createBrowseHistoryItem(input: $input) {
  //       browseHistoryEdge @appendEdge(connections: $connections) {
  //         node {
  //           id,
  //           base64Data
  //         }
  //       }
  //     }
  //   }
  // `);

  // const onFormSubmit = async (formData: BrowseHistoryFields) => {
  //   return await commitCrossingItemFormMutation({
  //     variables: {
  //       input: {
  //         base64Data: formData.base64Data
  //       },
  //       connections: [ConnectionHandler.getConnectionID('root', 'crossingItemList_allCrossingItems')],
  //     },
  //   });
  // };

  const handleSearch = (data: any) => {
    const request_json = {
      id: '42',
      inputs: [
        {
          name: 'IMAGE',
          shape: [1],
          datatype: 'BYTES',
          data: [data],
        },
      ],
      outputs: [
        {
          name: 'OCR',
        },
      ],
    };
    console.log(request_json);
  };

  return (
    <Container>
      <Header></Header>
      <P>Select an image</P>
      <Main>
        <Upload setBase64Str={setBase64Str}></Upload>
        <Url setBase64Str={setBase64Str}></Url>
      </Main>
      <SamplePicker setBase64Str={setBase64Str}></SamplePicker>
      <ButtonSection>
        <Button onClick={() => handleSearch(base64Str)}>Search</Button>
      </ButtonSection>
      {base64Str && <Canvas base64Str={base64Str}></Canvas>}
    </Container>
  );
};
