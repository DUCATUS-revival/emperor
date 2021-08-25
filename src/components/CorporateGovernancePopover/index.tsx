import { FC, useState } from 'react'
import { NavLink } from 'react-router-dom'
import styles from './CorporateGovernancePopover.module.scss'

export const CorporateGovernancePopover: FC = ({ children }) => {
  const [popoverOpen, setPopoverOpen] = useState<boolean>(false)

  const openPopover = () => setPopoverOpen(true)
  const closePopover = () => setPopoverOpen(false)

  return (
    <div className={styles.wrapper}>
      <span onClick={openPopover}>{children}</span>
      {popoverOpen && (
        <div className={styles.popover} onClick={closePopover}>
          <NavLink to='/corporate_governance/anti_bribery_policy'>
            <p>Anti-Bribery Policy</p>
          </NavLink>
          <NavLink to='/corporate_governance/code_of_conduct'>
            <p>Code Of Conduct</p>
          </NavLink>
          <NavLink to='/corporate_governance/risk_management_policy'>
            <p>Risk Management Policy </p>
          </NavLink>
          <NavLink to='/corporate_governance/tax_management_policy'>
            <p>Responsible Tax Management Policy</p>
          </NavLink>
        </div>
      )}
    </div>
  )
}
