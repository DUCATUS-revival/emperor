import { FC } from 'react'
import styles from '../CorporateGovernance.module.scss'

export const RiskManagementPolicy: FC = () => {
  return (
    <>
      {/* ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// */}
      <div className={styles.block}>
        <h2 className={styles.title}>1 Purpose and Objective</h2>
        <div className={styles.text}>
          The identification and management of risk reduces the uncertainty associated with the execution of our
          business strategies and allows Emperor Holdings (the “Company”) to maximise opportunities that may arise. Risk
          arises in many forms and can have positive or negative impacts on the Company’s ability to achieve its stated
          objectives. Risk has the potential to impact the reputation, regulatory, operational, human resources and
          financial performance of the Company and thus our ability to meet our stated objectives.
        </div>
      </div>
      {/* ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// */}
      <div className={styles.block}>
        <h2 className={styles.title}>2 Philosophy and Guiding Principles</h2>
        <div className={styles.text}>
          <div className={styles.paragraph}>
            The Company’s philosophy and approach in effective risk management is underpinned by three key principles as
            follows:
          </div>
          <ol className={styles.ol}>
            <li>
              Culture. We seek to build a strong risk management and control culture by setting the appropriate tone at
              the top, promoting awareness, ownership and proactive management of key risks, promoting prudent risk
              taking by minimising the hazard dimension of risk and maximising the opportunity dimension. In short, we
              seek to promote a risk-smart workforce across the Company.
            </li>
            <li>
              Structure. We seek to put in place an appropriate organisational structure that promotes good corporate
              governance, provides for proper segregation of duties, defines clearly risk taking responsibility and
              authority, and promotes ownership and accountability for risk taking.{' '}
            </li>
            <li>
              Process. We seek to implement robust processes and systems for effective identification, quantification,
              monitoring and controls of risk. We seek to improve our risk management and internal control policies and
              procedures on an on-going basis to ensure they remain sound and relevant by benchmarking to global best
              practices.
            </li>
          </ol>
          <div className={styles.paragraph}>
            On the above principles, the Company undertakes a continuous process of risk identification, monitoring,
            management and reporting of risks throughout the organisation, to provide assurance to the Board and
            stakeholders. The effectiveness of risk management policies, and processes is reviewed on a regular basis
            and where necessary improved. Furthermore, the risk management processes facilitate alignment of the
            Company’s strategy and annual operating plan with the management of key risks.
          </div>
        </div>
      </div>
      {/* ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// */}
      <div className={styles.block}>
        <h2 className={styles.title}>3 Board Level Oversight</h2>
        <div className={styles.text}>
          The Board has overall responsibility for the oversight of material risks in the Company’s business. The Chief
          Financial Officer (“CFO”) assists the Board in the oversight of the Company’s risk profile and policies,
          effectiveness of the Company’s risk management system including the identification and management of
          significant risks and reports to the Board on material matters, findings and recommendations pertaining to
          risk management. The CFO provides oversight of the financial reporting risk and the adequacy and effectiveness
          of the Company’s internal control and compliance systems.
        </div>
      </div>
      {/* ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// */}
      <div className={styles.block}>
        <h2 className={styles.title}>4 Responsibility of Management </h2>
        <div className={styles.text}>
          <div className={styles.paragraph}>
            The identification and management of risk is delegated to the CFO who is responsible for the effective
            implementation of risk management strategy, policies and processes to facilitate the achievement of business
            plans and goals. The CFO is responsible for setting the direction of corporate risk management, monitoring
            the implementation of risk management policies and procedures including the adequacy of the Company’s
            insurance programme.
          </div>
          <div className={styles.paragraph}>
            The CFO will report directly to the Board at least annually, and more often as conditions require. Risk
            assessment and mitigation is also an integral part of the Company’s annual business planning and budgeting
            process. The key risk management activities also include scenario planning, business continuity / disaster
            recovery management and crisis planning and management. Close monitoring and control processes, including
            the establishment of appropriate key risk controls, are put in place to ensure that risks are managed within
            acceptable limits. The Company has in place a formal programme of risk and control self-assessment whereby
            line personnel are involved in the on-going assessment and improvement of risk management and controls in
            selected areas. Additionally, external consultants are engaged from time to time to review the Company’s
            risk management processes.
          </div>
        </div>
      </div>
      {/* ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// */}
      <div className={styles.block}>
        <h2 className={styles.title}>5 Assurance on Risk Management Effectiveness </h2>
        <div className={styles.text}>
          <h3 className={styles.subtitle}>Role of Internal Audit </h3>
          <div className={styles.paragraph}>
            The CFO is primarily responsible for conducting the Company’s internal audit function and carries out
            reviews and internal control advisory activities which are aligned to the key risks in the Company’s
            business to provide independent assurance to the Board on the adequacy and effectiveness of the risk
            management, financial reporting processes and internal control and compliance systems.
          </div>
          <h3 className={styles.subtitle}>Certification by Management</h3>
          <div className={styles.paragraph}>
            To provide assurance to the Board, the CFO will to the Board a report on the key risks and mitigation
            strategies for their respective areas. On an annual basis, the CFO will provide a written certification to
            the Board confirming the soundness of financial reporting, and the efficiency and effectiveness of risk
            management, internal control and compliance systems.
          </div>
        </div>
      </div>
    </>
  )
}
