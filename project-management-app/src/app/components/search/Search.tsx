import { FieldValues, SubmitHandler, useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import { useAppDispatch, useAppSelector } from '../../../redux/hooks/reduxHooks';
import { usersSelector } from '../../../redux/selectors/BoardSelectors';
import { requestBoard, requestFilterBoard } from '../../../redux/services/Board.api';
import { ALL_USERS } from '../../../utils/constants';
import {
  ClearButton,
  OptionUserSelect,
  SearchButton,
  SearchForm,
  SearchInput,
  SearchTitle,
  UserSelect,
} from './styles';

export type SearchPropType = (searchValue: string, userValue: string) => void;

const Search = ({ boardId }: { boardId: string | undefined }) => {
  const dispatch = useAppDispatch();
  const { t } = useTranslation();
  const { register, handleSubmit, reset } = useForm();

  const usersData = useAppSelector(usersSelector);

  const onSubmit: SubmitHandler<FieldValues> = ({ searchValue, user }) => {
    dispatch(
      requestFilterBoard({
        boardId: String(boardId),
        searchSelectors: { searchValue, user },
      })
    );
  };

  const clearFilter = (event: Event) => {
    event.preventDefault();
    reset();
    dispatch(requestBoard({ id: String(boardId) }));
  };

  return (
    <SearchForm onSubmit={handleSubmit(onSubmit)}>
      <SearchTitle>{t('search.title')}</SearchTitle>
      <SearchInput
        type="text"
        {...register('searchValue')}
        placeholder={t('search.searchPlaceholder')}
      />
      <UserSelect {...register('user', {})} defaultValue={ALL_USERS}>
        <OptionUserSelect value={ALL_USERS}>All users</OptionUserSelect>
        {usersData.map(({ id, name }) => {
          return (
            <OptionUserSelect key={id} value={id}>
              {name}
            </OptionUserSelect>
          );
        })}
      </UserSelect>
      <SearchButton type="submit">{t('search.searchButton')}</SearchButton>
      <ClearButton onClick={clearFilter}>{t('search.clearButton')}</ClearButton>
    </SearchForm>
  );
};

export default Search;
