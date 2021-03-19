import './index.css'
import { usePager } from "./hooks";

export const Pager = () => {
  const { prev, next, goToPage } = usePager();
  return (
    <section className='button-group'>
      {prev ? <button onClick={() => goToPage(prev)} className='prev'> Prev</button> : null}
      {next ? <button onClick={() => goToPage(next)} className='next'> Next</button> : null}
    </section>
  );
};
