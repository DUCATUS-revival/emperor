import { FC } from 'react'
import styles from './TaxManagementPolicy.module.scss'

export const TaxManagementPolicy: FC = () => {
  return (
    <>
      {/* ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// */}
      <div className={styles.block}>
        <h2 className={styles.title}>Introduction</h2>
        <p className={styles.text}>
          Emperor Holdings (the “Company”) is committed to managing its taxes in a sustainable and compliant manner
          consistent with the commercial and social imperatives of our business and stakeholders. The Company recognises
          that its tax contributions are important to public finances and the social programmes they fund in the
          jurisdictions within which Company operates. These include all taxes that we incur on our business operations,
          as well as taxes that we collect on behalf of the government, such as withholding taxes or payroll taxes.
        </p>
      </div>
      {/* ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// */}
      <div className={styles.block}>
        <h2 className={styles.title}>Tax Governance and Compliance</h2>
        <p className={styles.text}>
          <p className={styles.paragraph}>
            At the Company, we advocate good corporate governance and have established a Risk Management Policy. It sets
            out our risk appetite and governance structure for managing risks and provides guidance on our risk
            management approach. Under the Company’s Risk Management Policy, the Board has overall responsibility for
            the governance of risks in the Company and is assisted by the Chief Financial Officer (“CFO”) with regards
            to the management and oversight of risks, including tax risks. The CFO also supervises the efficacy of this
            Tax Risk Management Policy and our tax risk management practices.
          </p>
          <p className={styles.paragraph}>
            The CFO oversees the tax function which is responsible for tax compliance and tax risk management. Given
            that tax legislation itself is complex and varies across the countries in which we operate, tax risk can
            arise due to differences in the interpretation of such legislation. To the extent that there is significant
            tax uncertainty or complexity, we will seek external professional advice or where applicable, consult with
            the relevant tax authority.
          </p>
        </p>
      </div>
      {/* ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// */}
      <div className={styles.block}>
        <h2 className={styles.title}>Approach to Tax Risk Management</h2>
        <p className={styles.text}>
          <p className={styles.paragraph}>
            The Company is committed to complying with the applicable tax laws of the jurisdictions where we operate.
            The management and tolerance of tax risks are guided by our goal of achieving shareholder value without
            compromising our integrity, values and reputation by risking, amongst others, regulatory non-compliance. Our
            Tax Risk Management Policy is founded on the following core tax principles:
          </p>
          <p>It is prohibited for the Company, Company Staff, or Associated Persons to:</p>
          <ol className={styles.ol}>
            <li>
              Business Conduct: Conducting our business and operations based on considerations underpinned by commercial
              motivations.
            </li>
            <li> Compliance: Ensuring our tax compliance and filing obligations are duly completed and fulfilled.</li>
            <li>
              Robust Controls and Oversight: Identifying, evaluating, and monitoring of tax risks in a proactive and
              timely manner and reporting them in line with procedures and protocols under the Tax Risk Management
              Framework.
            </li>
            <li>
              Resources: Employing skilled staff in taxation matters and working with reputable and experienced external
              tax consultants for advice and assistance on tax matters where appropriate.
            </li>
          </ol>
        </p>
      </div>
      {/* ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// */}
      <div className={styles.block}>
        <h2 className={styles.title}>Relationships with Tax Authorities</h2>
        <p className={styles.text}>
          The Company seeks to maintain collaborative, constructive, and transparent relationships with the relevant tax
          authorities based on mutual respect and trust. Where appropriate, the Company will seek clarifications or
          rulings from tax authorities on material transactions or interpretation of tax laws relevant to our business.
        </p>
      </div>
    </>
  )
}
