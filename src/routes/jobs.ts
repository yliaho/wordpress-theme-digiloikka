import JobAccordion from '../components/jobAccordion'

/**
 * @param selector The selector used to query all job HTMLElements
 */
const createJobAccordions = (selector: string) => {
  const jobElementNodes = document.querySelectorAll(selector)
  let jobQuery: JobAccordion[] = []

  for (let job of Array.from(jobElementNodes)) {
    jobQuery.push(new JobAccordion(job as HTMLElement))
  }

  return jobQuery
}
export const jobs: Route = {
  init() {
    const jobs = createJobAccordions('.job-accordion-container').map(
      jobEntity => ({
        jobEntity,
        name: jobEntity.jobTitle
      })
    )
  },

  finalize() {}
}
