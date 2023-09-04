import {
  ChooseTechCohortActionType,
  ChooseTechCohortInitialFormDataType,
} from '@/interfaces';
import { useReducer } from 'react';

const useBestTechProgramFormData = () => {
  // Reducer function to manage form field data
  const chooseTechCohortFormReducer = (
    state: ChooseTechCohortInitialFormDataType,
    { type, field, value }: ChooseTechCohortActionType
  ) => {
    switch (type) {
      case 'UPDATE_FIELD':
        return { ...state, [field]: value };
      default:
        return state;
    }
  };

  const initialFormData: ChooseTechCohortInitialFormDataType = {
    name: '',
    contact: '',
    email: '',
    profession: '',
    program: '',
  };

  const [formData, dispatch] = useReducer(
    chooseTechCohortFormReducer,
    initialFormData
  );

  return { formData, dispatch };
};

export default useBestTechProgramFormData;
